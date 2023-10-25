import { FormEvent, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateBarbecueUseCase, CreateManyParticipantsUseCase } from '@/application/usecases'
import { ParticipantDTO } from '@/application/protocols'
import { sleep } from '@/utils/function.ts'
import {
  Logo,
  Text,
  Container,
  TextField,
  Button,
  ParticipantList, DrinkSelection
} from '@/presentation/components'
import '@/presentation/pages/BarbecueCreate/BarbecueCreate.scss'

interface BarbecueCreatePageProps {
  createBarbecue: CreateBarbecueUseCase
  createManyParticipants: CreateManyParticipantsUseCase
}

const SUGGESTED_VALUE = {
  withDrinks: 50,
  withoutDrinks: 35
}

interface Participant {
  name: string
  contribution: number
  isPaid: boolean
}

export function BarbecueCreatePage({ createBarbecue, createManyParticipants }: BarbecueCreatePageProps) {
  const navigate = useNavigate()
  const [participants, setParticipants] = useState<Participant[]>([])
  const [withDrinks, setWithDrinks] = useState(SUGGESTED_VALUE.withDrinks)
  const [withoutDrinks, setWithoutDrinks] = useState(SUGGESTED_VALUE.withoutDrinks)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries()) as any

    const response = await createBarbecue.execute({
      date: new Date(data.date),
      title: data.title,
      notes: data.notes,
      suggestedValue: { withDrinks: Number(data.withDrinks), withoutDrinks: Number(data.withoutDrinks) }
    })

    if (response.isSuccess() && participants) {
      const participantsMapped: ParticipantDTO[] = participants.map(participant => ({
        barbecueId: response.value?.barbecue.id.toString(),
        name: participant.name,
        contribution: participant.contribution,
        isPaid: participant.isPaid
      }))

      await createManyParticipants.execute({ participants: participantsMapped })
    }

    await sleep(2000)
    setLoading(false)
    return navigate('/')
  }

  function handleParticipantSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries()) as any

    const newParticipant = {
      name: data.participant,
      contribution: data.drink === 'withDrinks' ? withDrinks : withoutDrinks,
      isPaid: false
    }

    setParticipants(state => [...state, newParticipant])
  }

  const handleParticipantRemove = useCallback((id: string) => {
    const data = Array.from(participants)
    data.splice(Number(id), 1)
    setParticipants(data)
  }, [participants])

  const handleParticipantPaid = useCallback((id: string, isPaid: boolean) => {
    const data = Array.from(participants)
    data[Number(id)].isPaid = isPaid
    setParticipants(data)
  }, [participants])

  return (
    <Container>
      <div className="header">
        <Text size="xl" weigth="extra-bold">Criar Churras</Text>
      </div>

      <div className="content">
        <form id="barbecueForm" onSubmit={handleSubmit}>
          <div className="field-group">
            <TextField type="date" label="Data" name="date" placeholder="dd/mm/yyyy" maxLength={255} required />
            <TextField label="Título" name="title" placeholder="título" maxLength={255} required />
          </div>

          <div className="field-group">
            <TextField
              value={withDrinks}
              type="number"
              label="Valor com bebida"
              name="withDrinks"
              placeholder="valor com bebida"
              onChange={(event) => setWithDrinks(Number(event.currentTarget.value))}
              required
            />
            <TextField
              value={withoutDrinks}
              type="number"
              label="Valor sem bebida"
              name="withoutDrinks"
              placeholder="valor sem bebida"
              onChange={(event) => setWithoutDrinks(Number(event.currentTarget.value))}
              required
            />
          </div>

          <TextField label="Observações" name="notes" placeholder="observações"/>
        </form>

        <form onSubmit={handleParticipantSubmit}>
          <div className="field-group">
            <TextField
              label="Adicionar Participante"
              name="participant"
              placeholder="nome do participante"
              required
            />

            <DrinkSelection />

            <Button type="submit" loading={loading}>Adicionar Participante</Button>
          </div>

          <ParticipantList
            participants={participants}
            onRemove={handleParticipantRemove}
            onChecking={handleParticipantPaid}
          />
        </form>

        <Button type="submit" form="barbecueForm" loading={loading} disabled={participants.length === 0}>Criar Churras</Button>
      </div>

      <div className="footer">
        <Logo/>
      </div>
    </Container>
  )
}
