function status(request, response) {
  response.status(200).json({ chave: "Teste de Status OK" })
}
export default status
