import { FormEvent, useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  CreateParticipantUseCase,
  DeleteParticipantUseCase,
  EditParticipantUseCase,
  FetchParticipantsByBarbecueIdUseCase,
  GetBarbecueUseCase
} from '@/application/usecases'
import { BarbecueDTO, ParticipantDTO } from '@/application/protocols'
import { currencyFormat, dateFormat } from '@/utils/format.ts'
import {
  Logo,
  Text,
  Container,
  ParticipantList,
  IconPeople,
  IconMoney,
  TextField,
  DrinkSelection, Button
} from '@/presentation/components'
import '@/presentation/pages/BarbecueDetails/BarbecueDetails.scss'

interface BarbecueDetailsPageProps {
  getBarbecue: GetBarbecueUseCase
  fetchParticipantsByBarbecueId: FetchParticipantsByBarbecueIdUseCase
  createParticipant: CreateParticipantUseCase
  editParticipant: EditParticipantUseCase
  deleteParticipant: DeleteParticipantUseCase
}

export function BarbecueDetailsPage({
  getBarbecue,
  fetchParticipantsByBarbecueId,
  createParticipant,
  editParticipant,
  deleteParticipant
}: BarbecueDetailsPageProps) {
  const { barbecueId = '' } = useParams()
  const [barbecue, setBarbecue] = useState<BarbecueDTO>()
  const [participants, setParticipants] = useState<ParticipantDTO[]>([])

  const handleGetBarbecue = useCallback(async () => {
    const response = await getBarbecue.execute({ id: barbecueId })

    if (response.isSuccess() && response.value.barbecue) {
      setBarbecue({
        ...response.value.barbecue.toValue(),
        suggestedValue: {
          withDrinks: response.value.barbecue.suggestedValue.withDrinks.value,
          withoutDrinks: response.value.barbecue.suggestedValue.withoutDrinks.value
        }
      })
    }
  }, [barbecueId, getBarbecue])

  const handleFetchParticipants = useCallback(async () => {
    const response = await fetchParticipantsByBarbecueId.execute({ barbecueId })

    if (response.isSuccess()) {
      const participantsMapped = response.value.participants.map(participant => ({
        id: participant.id.toString(),
        barbecueId: participant.barbecueId.toString(),
        name: participant.toValue().name,
        contribution: participant.contribution.value,
        isPaid: participant.toValue().isPaid
      }))

      setParticipants(participantsMapped)
    }
  }, [barbecueId, fetchParticipantsByBarbecueId])

  useEffect(() => {
    handleGetBarbecue().catch(error => error)
    handleFetchParticipants().catch(error => error)
  }, [handleFetchParticipants, handleGetBarbecue])

  async function handleParticipantSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries()) as any

    if (barbecue && barbecue.id) {
      await createParticipant.execute({
        barbecueId: barbecue.id.toString(),
        name: data.participant,
        contribution: barbecue.suggestedValue[data.drink as 'withDrinks' | 'withoutDrinks'],
        isPaid: false
      })

      await handleFetchParticipants()
    }
  }

  async function handleParticipantRemove(id: string) {
    await deleteParticipant.execute({ id })
    await handleFetchParticipants()
  }
  async function handleParticipantPaid(id: string, isPaid: boolean) {
    await editParticipant.execute({ id, data: { isPaid } })
    await handleFetchParticipants()
  }

  return (
    <Container>
      <div className="header">
        <Text size="xl" weigth="extra-bold">Agenda de Churras</Text>
      </div>

      <div className="barbecue-details-page">
        {barbecue && (
          <div className="barbecue">
            <div>
              <Text size="lg" weigth="extra-bold">{dateFormat(barbecue.date)}</Text>
              <div>
                <Text size="xl" weigth="bold">{barbecue.title}</Text>
                <Text size="sm" textStyle="italic">{barbecue.notes}</Text>
              </div>
            </div>

            <div>
              <Text weigth="medium"><IconPeople size={20} color="var(--color-yellow)"/> {participants.length}</Text>
              <Text weigth="medium">
                <IconMoney size={20} color="var(--color-yellow)" />
                {currencyFormat(participants.reduce((acc, cur) => (cur.isPaid ? cur.contribution : 0) + acc, 0))}
                /
                {currencyFormat(participants.reduce((acc, cur) => cur.contribution + acc, 0))}
              </Text>
            </div>
          </div>
        )}

        <form onSubmit={handleParticipantSubmit}>
          <div className="field-group">
            <TextField
              label="Adicionar Participante"
              name="participant"
              placeholder="nome do participante"
              required
            />

            <DrinkSelection />

            <Button type="submit">Adicionar Participante</Button>
          </div>
        </form>

        <ParticipantList
          participants={participants}
          onRemove={handleParticipantRemove}
          onChecking={handleParticipantPaid}
        />
      </div>

      <div className="footer">
        <Logo/>
      </div>
    </Container>
  )
}
