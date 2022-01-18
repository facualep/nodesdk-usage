import { InfoLine } from './InfoLine'

export type Item = {
  clientItemReferenceId?: string
  amount: number
  infoLines: InfoLine[]
  metaData?: string
  tags?: string[]
}
