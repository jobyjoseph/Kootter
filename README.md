## DB Schema

__questions__

| Column         | Type                                             |
|----------------|--------------------------------------------------|
| id             |                                                  |
| question       | String                                           |
| answer         | String                                           |
| type           | String                                           |
| options        | [{option: String, isAnswer: Boolean}]            |