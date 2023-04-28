Feature: Delete folder Testing

  Scenario Outline: for successfull inputs.
    Given User details id: <id> ,databaseName: "<databaseName>" to delete folder
    When Try to delete folder
    Then It will throw success with message: "<message>" while deleting folder

    Examples:
      |    id             |   databaseName    | message                                              |
      |    32             |   email_client    | 32 user deleted                                      |

  Scenario Outline: for unsuccessfull inputs.
    Given User details for unsuccessfull id: "<id>" ,databaseName: "<databaseName>" to delete folder
    When Try to delete folder
    Then It will throw error with message: "<message>" errorname:"<errorname>" while deleting folder

    Examples:
      | id                |   databaseName    | message                                                |  errorname         | 
      |                   |                   |   userId is required                                   |  ValidationError   |
      |    1              |                   |   databaseName is required                             |  ValidationError   |
      |    aman           |   email_client    |   userid is not defined                                |  ValidationError   |  