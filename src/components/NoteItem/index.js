// Write your code here
import {ListItem, HeadingList, Description} from './styledComponents'

const NoteItem = props => {
  const {echNote} = props
  const {title, description} = echNote
  return (
    <ListItem>
      <HeadingList>{title}</HeadingList>
      <Description>{description}</Description>
    </ListItem>
  )
}

export default NoteItem
