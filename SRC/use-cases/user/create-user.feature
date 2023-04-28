Feature: Create New User.

  Scenario Outline: Try to create new user with valid inputs, then it will throw error.
    Given User details emailId: "<emailId>", contactDetails: "<contactDetails>", databaseName: "<databaseName>" and password: "<password>" to create new user
    When Try to create new user
    Then It will create new user with details: <newUserDetails>
    # And createUser function will call <createUserFunctionCallCount> time while creating new user

    Examples:
      | emailId                   | contactDetails        |   databaseName    | password   |  newUserDetails |
      | aman.gupta@rapidops.com   | 7024166349            |   email_client    | 1234567890 |  '{"id": 1}'    |

  Scenario Outline: Try to create new user with invalid details, then it will throw error.
    Given User details emailId: "<emailId>", contactDetails: "<contactDetails>", databaseName: "<databaseName>" and password: "<password>" to create new user
    When Try to create new user
    Then It will throw error: "<error>" with message: "<message>" while creating new user

    Examples:
      | email_id          | contact_details  | password |   databaseName  | error           | message                                                |
      |                   |                  |          |                 | ValidationError | '"name" is required'                                   |
      |                   |                  |          |                 | ValidationError | '"email_id" is required'                               |
      | aman              |                  |          |                 | ValidationError | '"email_id" must be a valid email_id'                  |
      | aman@rapidops.com |                  |          |                 | ValidationError | '"contact_details" is required'                        |
      | aman@rapidops.com | +918319110534    |          |                 | ValidationError | '"password" is required'                               |
      | aman@rapidops.com | +918319110534    | 1234     |                 | ValidationError | '"password" length must be at least 8 characters long' |
      | aman@rapidops.com | +918319110534    | 1234@1Ab |                 | ValidationError | '"databaseName" should be given in header'             |
