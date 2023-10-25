import { useCallback, useEffect, useState } from 'react'
import { FetchBarbecuesUseCase, FetchParticipantsUseCase } from '@/application/usecases'
import { BarbecueCardAdd, BarbecueCardItem, Logo, Text, Container } from '@/presentation/components'
import { useNavigate } from 'react-router-dom'
import { BarbecueDTO, ParticipantDTO } from '@/application/protocols'
import '@/presentation/pages/Home/Home.scss'

interface HomePageProps {
  fetchBarbecues: FetchBarbecuesUseCase
  fetchParticipants: FetchParticipantsUseCase
}

interface Barbecue extends BarbecueDTO {
  participants: ParticipantDTO[]
}

export function HomePage({ fetchBarbecues, fetchParticipants }: HomePageProps) {
  const navigate = useNavigate()
  const [barbecues, setBarbecues] = useState<Barbecue[]>()

  const handleFetchBarbecues = useCallback(async () => {
    const response = await fetchBarbecues.execute()
    const participantsResponse = await fetchParticipants.execute()

    if (response.isSuccess() && participantsResponse.isSuccess()) {
      const participantsMapped = participantsResponse.value.participants.map(participant => ({
        barbecueId: participant.barbecueId.toString(),
        name: participant.toValue().name,
        contribution: participant.contribution.value,
        isPaid: participant.toValue().isPaid
      }))

      const barbecuesMapped = response.value.barbecues.map(barbecue => ({
        ...barbecue.toValue(),
        suggestedValue: {
          withDrinks: barbecue.suggestedValue.withDrinks.value,
          withoutDrinks: barbecue.suggestedValue.withoutDrinks.value
        },
        participants: participantsMapped.filter(participant => participant.barbecueId === barbecue.id.toString())
      }))

      setBarbecues(barbecuesMapped)
    }
  }, [fetchBarbecues, fetchParticipants])

  useEffect(() => {
    handleFetchBarbecues().catch((error) => error)
  }, [handleFetchBarbecues])

  return (
    <Container>
      <div className="header">
        <Text size="xl" weigth="extra-bold">Agenda de Churras</Text>
      </div>

      <div className="content">
        <BarbecueCardAdd onClick={() => navigate('/barbecue/create')}/>

        {barbecues && barbecues.map((barbecue, i) => (
          <BarbecueCardItem
            key={`barbecue-card-item-${i + 1}`}
            date={barbecue.date}
            title={barbecue.title}
            people={barbecue.participants.length}
            contribution={barbecue.participants.reduce((acc, cur) => cur.contribution + acc, 0)}
            onClick={() => navigate(`/barbecue/${barbecue.id}/details`)}
          />
        ))}
      </div>

      <div className="footer">
        <Logo/>
      </div>
    </Container>
  )
}
