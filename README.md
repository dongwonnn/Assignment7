# Assignment7

Created with CodeSandbox

## 실행 오류

- appTsConfig.compilerOptions[option] = value;
  typescript 4.1.0 버전의 문제라고 합니다. 프로젝트를 시작할 때 tsconfig를 지우고 시작하면 되지만, 아래처럼 변수 명을 변경해 해결할 수 있습니다.
  node_modules\react-scripts\scripts\utils\verifyTypeScriptSetup.js의 151번째 줄의 ts.JsxEmit.ReactJsx를 ts.JsxEmit.ReactJSX로 교체합니다.
  [참고](https://github.com/facebook/create-react-app/issues/9868)
  
- Definition for rule 'react-hooks/exhaustive-deps' was not found react-hooks/exhaustive-deps:
  플러그인 구성 react-hooks에 플러그인이 없기 때문에 발생합니다. eslint 설정으로 해결했습니다.
  [참고](https://stackoverflow.com/questions/59611822/definition-for-rule-react-hooks-exhaustive-deps-was-not-found)

- TodoService.tsx의 initialTodos = JSON.parse(data); 에러
- Snipper의  readonly ["data-mask"]: boolean; 에러