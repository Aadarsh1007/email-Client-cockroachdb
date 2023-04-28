Feature: Update User.

  Scenario Outline: Try to update user with valid inputs, then it will throw error.
    Given User details contactDetails: "<contactDetails>", and password: "<password>", id: <id>, databaseName: "<databaseName>" to update user
    When Try to update user
    Then It will update user with details: <newUserDetails>

    Examples:
    | contactDetails        | password   |       id        |    databaseName    |  newUserDetails   |
    | 7024166349            | 1234567890 |       1         |    email_client    |   '{"id": 1}'     |

  Scenario Outline: Try to update user with invalid details, then it will throw error.
    Given User incorrect details contactDetails: "<contactDetails>", and password: "<password>", id: "<id>", databaseName: "<databaseName>" to update user
    When Try to update user
    Then It will throw error: "<error>" with message: "<message>" while updating user

    Examples:
    | contactDetails   | password |    id   |   databaseName    | error           | message                                                |
    |                  |          |         |                   | ValidationError | '"contactDetails" is required'                         |
    | +918319110534    |          |         |                   | ValidationError | '"password" is required'                               |
    | +918319110534    | 1234     |         |                   | ValidationError | '"password" length must be at least 8 characters long' |
    | +918319110534    | 1234@Agd |         |                   | ValidationError | '"id" is required'                                     |
    | +918319110534    | 1234@Agd |    1    |                   | ValidationError | '"databaseName" is required'                                     |
