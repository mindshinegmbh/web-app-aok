import reducer, { setTheme } from 'redux/theme'
import {initialState} from 'redux/theme/state'
import { ThemeState } from 'redux/theme/type'
import { DARK, LIGHT } from 'styling/themes'

test('should return the initial state', () => {
  expect(reducer(undefined, { type: 'undefined' })).toEqual(
    initialState
  )
})

test('should set theme to dark', () => {
  const previousState: ThemeState = {
     theme: LIGHT
  }

  const expectedState: ThemeState = {
    theme: DARK
  }

  expect(reducer(previousState, setTheme(DARK))).toEqual(
    expectedState
  )
})

test('should set theme to light', () => {
    const previousState: ThemeState = {
       theme: DARK
    }
  
    const expectedState: ThemeState = {
      theme: LIGHT
    }
  
    expect(reducer(previousState, setTheme(LIGHT))).toEqual(
      expectedState
    )
})

// test('should handle a todo being added to an existing list', () => {
//   const previousState: Todo[] = [
//     { text: 'Run the tests', completed: true, id: 0 }
//   ]

//   expect(reducer(previousState, todoAdded('Use Redux'))).toEqual([
//     { text: 'Run the tests', completed: true, id: 0 },
//     { text: 'Use Redux', completed: false, id: 1 }
//   ])
// })