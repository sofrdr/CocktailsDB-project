import styled, { keyframes } from "styled-components";
import colors from "./colors";

const load = keyframes`
    20% {background-size:32px 50% ,32px 100%,32px 100%}
    40% {background-size:32px 75% ,32px 50% ,32px 100%}
    50% {background-size:32px 100%,32px 75% ,32px 50% }
    80% {background-size:32px 100%,32px 100%,32px 75% }
`;

const Loader = styled.div`
  margin: 0 auto;
  margin-top: 240px;
  width: 120px;
  height: 80px;
  --c: linear-gradient(#476a2e 0 0);
  background: var(--c) 0% 100%, var(--c) 50% 100%, var(--c) 100% 100%;
  background-size: 32px 100%;
  background-repeat: no-repeat;
  animation: ${load} 1s infinite linear;
`;

export default Loader;
