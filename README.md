## DB Schema

Collection: __questions__

| Column         | Type                                             |
|----------------|--------------------------------------------------|
| id             |                                                  |
| question       | String                                           |
| answer         | String                                           |
| type           | String                                           |
| options        | [option: String, isAnswer: Boolean]              |

Collection: __users__

| Column         | Type                                             |
|----------------|--------------------------------------------------|
| id             |                                                  |
| username       | String                                           |
| first_name     | String                                           |
| last_name      | String                                           |
| email          | String                                           |
| password       | String                                           |

Collection: __activities__

| Column         | Type                                             |
|----------------|--------------------------------------------------|
| id             |                                                  |
| user_id        | String                                           |
| quiz_id        | String                                           |
| score          | Number                                           |
| questions      | [id: Number, question: String, user_answer: String, correct_answer: String, score: Number] |
| start_date     | Date                                           |