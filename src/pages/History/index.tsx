import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nome da Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerda de 2 meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Nome da Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerda de 2 meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Nome da Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerda de 2 meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Nome da Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerda de 2 meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Nome da Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerda de 2 meses</td>
              <td>Concluído</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
