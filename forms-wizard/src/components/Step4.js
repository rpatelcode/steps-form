import React, { Component } from "react";
import {
  List,
  Button,
  Container,
  Grid,
  Form,
  Header,
  Divider,
  Table,
  Segment
} from "semantic-ui-react";
import Steps from "./Steps";

export class Step4 extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  cancel = e => {};

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <Container style={{ marginTop: "3em" }}>
        <Steps stepNumber={4} />

        <Form>
          <Segment>
            <Header as="h3" textAlign="left">
              Step 1
            </Header>

            <Grid columns="equal">
              <Grid.Row>
                <Grid.Column>First Name : </Grid.Column>
                <Grid.Column>Address :</Grid.Column>
                <Grid.Column>eMail : </Grid.Column>
                <Grid.Column>Computer A First</Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>Computer B Fourth</Grid.Column>
                <Grid.Column>Computer B Third</Grid.Column>
                <Grid.Column>Computer B Second</Grid.Column>
                <Grid.Column>Computer B First</Grid.Column>
              </Grid.Row>
            </Grid>

            <Divider section />

            <Header as="h3" textAlign="left">
              Step 2
            </Header>

            <Table basic>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>Address</Table.HeaderCell>
                  <Table.HeaderCell>Notes</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>Jill</Table.Cell>
                  <Table.Cell>Denied</Table.Cell>
                  <Table.Cell>Address</Table.Cell>
                  <Table.Cell>None</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Table basic>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>Address</Table.HeaderCell>
                  <Table.HeaderCell>Notes</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>Jill</Table.Cell>
                  <Table.Cell>Denied</Table.Cell>
                  <Table.Cell>Address</Table.Cell>
                  <Table.Cell>None</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Table basic>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>Address</Table.HeaderCell>
                  <Table.HeaderCell>Notes</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>Jill</Table.Cell>
                  <Table.Cell>Denied</Table.Cell>
                  <Table.Cell>Address</Table.Cell>
                  <Table.Cell>None</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Table basic>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>Address</Table.HeaderCell>
                  <Table.HeaderCell>Notes</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>Jill</Table.Cell>
                  <Table.Cell>Denied</Table.Cell>
                  <Table.Cell>Address</Table.Cell>
                  <Table.Cell>None</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Segment>
          <Button content="Cancel" onClick={this.cancel} secondary />
          <Button
            content="Back"
            icon="left arrow"
            labelPosition="left"
            onClick={this.back}
            primary
          />
          <Button
            content="Next"
            icon="right arrow"
            labelPosition="right"
            onClick={this.continue}
            primary
          />
        </Form>

        <Grid columns={2} stackable>
          <Grid.Column>
            <Segment raised>
              <List>
                <List.Item>
                  <List.Header>First Name</List.Header>
                  {firstName}
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment raised>
              <List>
                <List.Item>
                  <List.Header>Last Name</List.Header>
                  {lastName}
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment raised>
              <List>
                <List.Item>
                  <List.Header>Email</List.Header>
                  {email}
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment raised>
              <List>
                <List.Item>
                  <List.Header>Occupation</List.Header>
                  {occupation}
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment raised>
              <List>
                <List.Item>
                  <List.Header>City</List.Header>
                  {city}
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment raised>
              <List>
                <List.Item>
                  <List.Header>Bio</List.Header>
                  {bio}
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>
        </Grid>
        <Button content="Cancel" onClick={this.cancel} secondary />
        <Button
          content="Back"
          icon="left arrow"
          labelPosition="left"
          onClick={this.back}
          primary
        />
        <h1>Thank You For Your Submission</h1>
        <p>You will get an email with further instructions</p>
      </Container>
    );
  }
}

export default Step4;
