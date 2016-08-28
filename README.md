### API

## Namespace: /api

| Endpoint | Method | Short Description |
|---|---|----|
| /getAllStudents | GET | Get the list of all the enrolled students |
| /getAllSubjects | GET | Get the list of all the subjects available |
| /getMaxMarks/:subject_id | GET | Get the maximum marks for a particular subject |
| /getAllMarks/:student_id | GET | Get obtained marks in all subjects for a particular student |
| /getMarks/:student_id/:subject_id | GET | Get obtained marks for a particular student in a particular subject |


# Detailed description

**/getAllStudents**

| Parameter | Description |
|---|---|
| `None` |  |

#### Sample output

[http://demo.aalekhjain.me/api/getAllStudents](http://demo.aalekhjain.me/api/getAllStudents) (on successfull run) =>
(Roll Numbers can be expected in sorted order)
```javascript
[2014010,2014011,2014012,2014013,2014014,2014015,2014016,2014017,2014018,2014019]
```

---

**/getAllSubjects**

| Parameter | Description |
|---|---|
| `None` | <Description> |

#### Sample output

[http://demo.aalekhjain.me/api/getAllSubjects](http://demo.aalekhjain.me/api/getAllSubjects) (on successfull run) =>
```javascript
[{"id":0,"name":"DS"},{"id":1,"name":"DLP"},{"id":2,"name":"ITWS"},{"id":3,"name":"SE"},{"id":4,"name":"BEC"},{"id":5,"name":"ES"}]
```

---

**/getMaxMarks/:subject_id**

| Parameter | Description |
|---|---|
| subject_id | Id of the subject whose maximum marks need to be found |

#### Sample output

[http://demo.aalekhjain.me/api/getMaxMarks/0](http://demo.aalekhjain.me/api/getMaxMarks/0) (on successfull run) =>
```javascript
{"max_marks":10}
```

---

**/getAllMarks/:student_id**

| Parameter | Description |
|---|---|
| student_id | Id (roll_no) of the student whose all marks (in all subjects) need to be found |

#### Sample output

[http://demo.aalekhjain.me/api/getAllMarks/2014013](http://demo.aalekhjain.me/api/getAllMarks/2014013) (on successfull run) =>
```javascript
{"obtained_marks":[12,16,21,22,24,23]}
```

---

**/getMarks/:student_id/:subject_id**

| Parameter | Description |
|---|---|
| student_id | Id (roll_no) of the student whose marks in a particular subject needs to be found |
| subject_id | Id of the subject whose marks need to be found |

#### Sample output

[http://demo.aalekhjain.me/api/getMarks/2014013/2](http://demo.aalekhjain.me/api/getMarks/2014013/2) (on successfull run) =>
```javascript
{"obtained_mark":21}
```

---
