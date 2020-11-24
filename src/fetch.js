export function getNannies() {
  return fetch("http://localhost:8080/api/nanny", {
    mode: "no-cors",
  }).then((data) => data.json());
}
