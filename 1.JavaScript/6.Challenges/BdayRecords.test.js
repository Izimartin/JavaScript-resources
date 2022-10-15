import React from "react"
import { render, fireEvent, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from "./App"

const TEST_IDS = {
  nameId: 'name',
  ageId: 'age',
  tableId: 'table'
}

describe("Birthday Records", () => {

  let radioName
  let radioAge
  let table

  beforeEach(() => {
    const {getByTestId} = render(<App />)
    radioName = getByTestId(TEST_IDS.nameId)
    radioAge = getByTestId(TEST_IDS.ageId)
    table = getByTestId(TEST_IDS.tableId)
  })

  afterEach(() => {
    cleanup()
  })

  it("check if radio 'name' and 'age' are switched when clicked", () => {
    fireEvent.click(radioName)
    fireEvent.click(radioAge)
    expect(radioAge).toBeChecked()
    expect(radioName).not.toBeChecked()
  })

  it("check if number of table rows are rendered", () => {
    expect(table.rows.length).toEqual(9)
  })

  it("check if random rows not sorted originally", () => {
    expect(table.rows[3].textContent).toContain("Trevon Floyd")
    expect(table.rows[4].textContent).toContain("Melanie Yates")
  })

  it("check if random rows sorted by name when radio 'name' is clicked", () => {
    fireEvent.click(radioName)
    expect(table.rows[2].textContent).toContain("Chris Andrews")
    expect(table.rows[5].textContent).toContain("Melanie Yates")
  })

  it("check if random rows sorted by age when radio 'age' is clicked", () => {
    fireEvent.click(radioAge)
    expect(table.rows[6].textContent).toContain("12/12/2001")
    expect(table.rows[7].textContent).toContain("11/30/2011")
  })
})


