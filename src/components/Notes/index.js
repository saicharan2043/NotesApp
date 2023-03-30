// Write your code here
import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'
import {
  BgContainer,
  Heading,
  FormContainer,
  Input,
  TextArea,
  Button,
  UnOrderList,
  EmptyContainer,
  ImageOfEmpty,
  HeadingOfEmpty,
  ParagraphOfEmpty,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [NotesList, setNotesList] = useState([])

  const changeTitle = event => {
    setTitle(event.target.value)
  }

  const changeDescription = event => {
    setDescription(event.target.value)
  }

  const clickAdd = event => {
    event.preventDefault()
    if (title !== '' && description !== '') {
      const newNote = {
        id: uuidv4(),
        title,
        description,
      }

      setTitle('')
      setDescription('')
      setNotesList(previous => [...previous, newNote])
    }
  }

  return (
    <BgContainer>
      <Heading>Notes</Heading>
      <FormContainer onSubmit={clickAdd}>
        <Input
          type="text"
          placeholder="Title"
          onChange={changeTitle}
          value={title}
        />
        <TextArea
          rows="5"
          cols="10"
          onChange={changeDescription}
          placeholder="Take a Note..."
          value={description}
        >
          Take a Note...
        </TextArea>
        <Button type="submit">Add</Button>
      </FormContainer>
      {NotesList.length !== 0 ? (
        <UnOrderList>
          {NotesList.map(echValue => (
            <NoteItem echNote={echValue} key={echValue.id} />
          ))}
        </UnOrderList>
      ) : (
        <EmptyContainer>
          <ImageOfEmpty
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <HeadingOfEmpty>No Notes Yet</HeadingOfEmpty>
          <ParagraphOfEmpty>Notes you add will appear here</ParagraphOfEmpty>
        </EmptyContainer>
      )}
    </BgContainer>
  )
}

export default Notes
