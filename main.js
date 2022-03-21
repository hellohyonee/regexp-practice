const str = `
010-1234-5678
theapple@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
Use Material tools, downloads, and interactive projects to simplify your workflow.
The Banana.
abbccdddd
http://localhost:1234
회원가입_또는 로그인하세요
`

const regexp1 = new RegExp('the', 'gi')
const regexp2 = /the/gi
const regexp3 = /tools/gi
const regexp4 = /downloads/gi

console.log(str.match(regexp1))
console.log(str.match(regexp2))

console.log(regexp3.test(str))

console.log(str.replace(regexp4, 'AAA'))
console.log(str) // replace -> 원본 데이터를 손상하지 않음

console.log(str.match(/\.$/gim)) // 특수기호 앞에 \ 붙여서 일반 문자로 만듬. $ -> 마침표 뒷부분에 붙임. 마침표가 끝나는 부분

console.log(
  str.match(/d$/gm) // $ ->  줄 바꿈이 이루어지는 모든 줄을 찾아냄. m 옵션을 넣어서 여러 줄을 찾기
)

console.log(
  str.match(/^t/gim)
)

console.log(
  str.match(/./g) // 모든 글자들을 나타낼 수 있음
)
console.log(
  str.match(/h..p/g) // h로 시작, p로 끝나는 문자를 찾기
)

console.log(
  str.match(/tools|downloads/) // 먼저 찾아지는 tools가 출력
)

console.log(
  str.match(/https?/g) // 
)

console.log(
  str.match(/d{2,}/g)
)
console.log(
  str.match(/\b\w{2,3}\b/g) // 숫자를 포함한 알파벳 2개 이상 3개 이하
)

console.log(
  str.match(/[tools]{1,}/g) 
)
console.log(
  str.match(/[0-9]{1,}/g) 
)
console.log(
  str.match(/[가-힣]{1,}/g) 
)

console.log(
  str.match(/\w/g) 
)
console.log(
  str.match(/\bf\w{1,}\b/g) // 소문자 f로 시작하는 모든 영단어
)
console.log(
  str.match(/\d{1,}/g) 
)

const h = `  the hello world    !

`
console.log(
  str.match(/\s/g) 
)
console.log(
  h.replace(/\s/g, '') // 모든 공백을 사라지게 하기
)

console.log(
  str.match(/.{1,}(?=@)/g) // 1개 이상의 @를 기준으로 앞쪽 일치 문자 
)
console.log(
  str.match(/(?<=@).{1,}/g) // 1개 이상의 @를 기준으로 뒷쪽 일치 문자 
)