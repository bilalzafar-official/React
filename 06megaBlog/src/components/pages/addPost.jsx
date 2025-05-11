import React from 'react'
// import { Container, PostForm } from '../components'
import Container from '../conatainer/container'
import PostForm from '../post-form/postForm'

function AddPost() {
  return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost