Feature: Get One User Testing

  Scenario Outline: for successfull inputs.
    Given User details id: <id> and databaseName: "<databaseName>" to get user
    When Try to get user
    Then It will throw success with message: "<message>" while getting user

    Examples:
      | id               | databaseName | message                  |
      |    1             | email_client | 1 user fetched           |    


  Scenario Outline: for unsuccessfull inputs.
    Given User details for unsuccessfull id: "<id>" and databaseName: "<databaseName>" to get user
    When Try to get user
    Then It will throw error with message: "<message>" errorname:"<errorname>" while getting user

    Examples:
      | id                |   databaseName    | message                                                |  errorname         | 
      |                   |                   |   userId is required                                   |  ValidationError   |
      | asas              |                   |   userId is not defined                                |  ValidationError   |  
      |   1               |                   |   databaseName is not defined                          |  ValidationError   |  