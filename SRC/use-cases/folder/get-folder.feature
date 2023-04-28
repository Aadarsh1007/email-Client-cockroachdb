Feature: Get One folder Testing

  Scenario Outline: for successfull inputs.
    Given folder details id: <id> ,databaseName: "<databaseName>" to get folder
    When Try to get folder
    Then It will throw success with message: "<message>" while getting folder

    Examples:
      | id                |   databaseName    | message                                                |
      |    1              |   email_client    | 1 user fetched                                         |

  Scenario Outline: for unsuccessfull inputs.
    Given folder details for unsuccessfull id: "<id>" ,databaseName: "<databaseName>" to get folder
    When Try to get folder
    Then It will throw error with message: "<message>" errorname:"<errorname>" while getting folder

    Examples:
      | id                |   databaseName    | message                                                |  errorname         | 
      |                   |                   |   userId is required                                   |  ValidationError   |
      | 1                 |                   |   databaseName is not defined                          |  ValidationError   |
      | aman              |   email_client    |   id is not defined                                    |  ValidationError   |  