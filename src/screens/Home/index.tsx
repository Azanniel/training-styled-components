import { Doctor } from '../../components/Doctor'
import { Container, List } from './styles'

const DATA = [
  { id: '1', avatar: 'https://github.com/azanniel.png', name: 'Leandro Azanniel', specialty: 'Neuro' },
  { id: '2', avatar: 'https://github.com/azanniel.png', name: 'Leandro Azanniel', specialty: 'Neuro' },
  { id: '3', avatar: 'https://github.com/azanniel.png', name: 'Leandro Azanniel', specialty: 'Neuro' },
  { id: '4', avatar: 'https://github.com/azanniel.png', name: 'Leandro Azanniel', specialty: 'Neuro' },
  { id: '5', avatar: 'https://github.com/azanniel.png', name: 'Leandro Azanniel', specialty: 'Neuro' },
  { id: '6', avatar: 'https://github.com/azanniel.png', name: 'Leandro Azanniel', specialty: 'Neuro' },
  { id: '7', avatar: 'https://github.com/azanniel.png', name: 'Leandro Azanniel', specialty: 'Neuro' },
  { id: '8', avatar: 'https://github.com/azanniel.png', name: 'Leandro Azanniel', specialty: 'Neuro' },
  { id: '9', avatar: 'https://github.com/azanniel.png', name: 'Leandro Azanniel', specialty: 'Neuro' },
  { id: '10', avatar: 'https://github.com/azanniel.png', name: 'Leandro Azanniel', specialty: 'Neuro' }
]

export function Home(){
  return (
    <Container>
      <List
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Doctor type='primary' data={item} />}
        numColumns={2}
      />
    </Container>
  )
}