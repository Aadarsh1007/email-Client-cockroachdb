Feature: Delete User Testing

  Scenario Outline: for successfull inputs.
    Given User details id: <id> and databaseName: "<databaseName>" to delete user
    When Try to delete user
    Then It will throw success with message: "<message>" while deleting user

    Examples:
      |    id         |     databaseName        | message                                              |
      |    1          |     email_client        | 1 user deleted                                       |

  Scenario Outline: for unsuccessfull inputs.
    Given User details for unsuccessfull id: "<id>" and databaseName: "<databaseName>" to delete user
    When Try to delete user
    Then It will throw error with message: "<message>" errorname:"<errorname>" while deleting user

    Examples:
      | id                |   databaseName    | message                                                |  errorname         | 
      |                   |                   |   userId is required                                   |  ValidationError   |
      | asas              |                   |   userId is not defined                                |  ValidationError   |
      |  1                |                   |   databaseName is required                             |  ValidationError   |  