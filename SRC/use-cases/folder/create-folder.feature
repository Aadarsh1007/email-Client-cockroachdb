Feature: Create New folder.

  Scenario Outline: Try to create new folder with valid inputs, then it will throw error.
    Given folder details id: <id>, folderName: "<folderName>", databaseName: "<databaseName>" to create new folder
    When Try to create new folder
    Then It will create new folder with details: <newUserDetails>

    Examples:
      |       id                   | folderName   |   databaseName    |  newUserDetails |
      |        1                   |  aman        |   email_client    |  '{"id": 1}'     |

  Scenario Outline: Try to create new folder with invalid details, then it will throw error.
    Given folder invalid details id: "<id>", folderName: "<folderName>", databaseName: "<databaseName>" to create new folder
    When Try to create new folder
    Then It will throw error: "<error>" with message: "<message>" while creating new folder

    Examples:
      |       id          | folderName       | databaseName | error           | message                                                |
      |                   |                  |              | ValidationError | '"id" is required'                                     |
      |      aman         |                  |              | ValidationError | '"id" must be a valid id'                              |
      |       1           |                  |              | ValidationError | '"folderName" is required'                             |
      |       1           |     aman         |              | ValidationError | '"databaseName" is required'                           |
