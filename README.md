# Learn shadcn UI

파일럿 프로젝트 개발에 적용될 ui 라이브러리에 대한 학습 진행.

## shadcn/ui 러닝커브

베이스는 NextJS를 기준으로 활용가능한 컴포넌트를 Shadcn/ui 를 활용해 작성해 볼 것.

Tailwind에 대한 학습도 병행하여 적용 시, 작업이 가능한 수준으로 학습을 목표로 함.

## shadcn/ui 컴포넌트 생성 단점 보완

shadcn/ui 컴포넌트를 생성하는 과정에서 스크립트 입력 내용이 많아 매번 입력에 대한 부담감이 느껴짐.

따라서, 파일럿 프로젝트 개발 시 쉽게 컴포넌트를 불러올 수 있도록 스크립트 작성이 필요할 듯 함.

설정은 components.json 설정 파일에 대한 의존과 readline 모듈을 통해 사용자 input을 받아 컴포넌트 이름만 입력해도 사용이 가능하도록 할 예정

스크립트의 파일 위치는 아래와 같다.

```
// root
components.json
shadcn-scripts.js
package.json // add run shadcn-scripts.js to package.json
```

실행 방법은 아래와 같다.

```
npm run get-comp

> dround_front@0.1.0 get-comp
> node ./shadcn-scripts.js

생성할 shadcn/ui 컴포넌트를 입력해 주세요. : {UI 컴포넌트 이름}

// 중복의 컴포넌트 이름이 있을 경우
동일한 컴포넌트가 이미 있습니다. 덮어 씌우시겠습니까? (y/n) : {y key/any key}
- Installing components...
✔ Done.
```
