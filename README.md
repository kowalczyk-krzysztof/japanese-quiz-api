# Japanese Quiz

Generate a random 2-kanji word and check whether it exists

### Output:
```typescript
type Word {
 readonly word: string,
 readonly wordExists: boolean,
 readonly reading: string,
 readonly definitions: string[]
}
```
### Example output:
```json
{ 
  "word":"渉外",
  "wordExists":true,
  "reading":"しょうがい",
  "definitions": [
    "public relations",
    "client liaison",
    "client relations"
  ]
}
``` 
