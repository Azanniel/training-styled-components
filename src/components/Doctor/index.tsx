import { 
  Container,
  Avatar,
  Name,
  Specialty,
  DoctorProps
} from "./styles";

export type DoctorDataProps = {
  id: string;
  name: string;
  avatar: string;
  specialty: string;
}

type Props = DoctorProps & {
  data: DoctorDataProps
}

export function Doctor({ type, data, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Avatar source={{ uri: data.avatar }} />

      <Name>{data.name}</Name>

      <Specialty>{data.specialty}</Specialty>
    </Container>
  )
}