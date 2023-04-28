Feature: Delete User Testing

  Scenario Outline: for successfull inputs.
    Given User details folderid: "<folderid>" , folderName: "<folderName>" ,databaseName: "<databaseName>" to update folder
    When Try to update folder
    Then It will throw success with message: "<message>" while updating folder

    Examples:
      |    folderid       | folderName             |    databaseName    |   message         |
      |    1              |  something             |    email_client    |  '{"id": 1}'      |

  Scenario Outline: for unsuccessfull inputs.
    Given invalid User details folderid: "<folderid>" , folderName: "<folderName>" ,databaseName: "<databaseName>" to update folder
    When Try to update folder
    Then It will throw error with message: "<message>" error:"<error>" while updating folder

    Examples:
      |    folderid       | folderName            |   databaseName    |   error               |  message                 |
      |    1              |                       |                   |  ValidationError      | foldername is required   |
      # |                   |  something            |                   |  ValidationError      | folderid is required     |
      # |    1              |  something            |                   |  ValidationError      | folderName is required   |