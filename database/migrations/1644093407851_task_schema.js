'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskSchema extends Schema {
  up() {
    this.create('tasks', (table) => {
      table.increments()
      table.text('title')
      table.timestamps()
    })

  }

  down() {
    this.drop('tasks')
  }
}

module.exports = TaskSchema
