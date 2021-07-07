import React from "react"
import { Switch, Route } from "react-router-dom"
import { Container, InnerContainer } from "./styles"
import NotesList from "../NotesList/NotesList"
import Header from "../../components/Header/Header"

const Main = () => (
  <>
    <Header />
    <Container>
      <InnerContainer>
        <Switch>
          <Route path="/" exact>
            <NotesList />
          </Route>
          <Route path="/:id" exact>
            <div>note</div>
          </Route>
        </Switch>
      </InnerContainer>
    </Container>
  </>
)

export default Main
