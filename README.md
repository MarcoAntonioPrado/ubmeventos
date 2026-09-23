# UBM Eventos — Web

Portal de eventos acadêmicos. Projeto integrador da disciplina **Laboratório de
Programação Front End** — 6º período, Engenharia de Software / UBM.
Repositório de referência do docente (Prof. Dr. Rubens Guimarães), evoluído
aula a aula: cada entrega é marcada com a tag `aula-NN`.

**Stack:** React + Vite (JavaScript). Fases futuras: Node.js/Express +
PostgreSQL (API) e Next.js.

## Executar — Windows / PowerShell

```powershell
# primeira vez
Set-Location "D:\projects"
git clone https://github.com/rubensguimaraes/ubm-eventos-web.git
Set-Location "D:\projects\ubm-eventos-web"
npm install

# rodar
npm run dev    # ➜ http://localhost:5173
```

Encerrar com `Ctrl + C`.

## Executar — WSL / Linux

```bash
cd /mnt/d/projects/ubm-eventos-web
npm install          # se o node_modules atual veio do Windows
npm run dev -- --host
```

## Regra de ouro entre Windows e WSL

Nunca compartilhe o mesmo `node_modules` entre os dois sistemas. Ao trocar de
lado: apague `node_modules` e rode `npm install`. O `package-lock.json`
garante reconstrução idêntica — versionamos a receita, nunca os pacotes.

## Ciclo de trabalho

```powershell
git pull
# editar em src/
npm run dev          # conferir (HMR)
git add .
git commit -m "feat: descrição no padrão da disciplina"
git push
# ao fechar uma aula:
git tag aula-NN && git push --tags
```

Convenção de commits: `feat:` `fix:` `style:` `chore:` `docs:`.

## Solução de problemas

| Sintoma | Solução |
|---|---|
| `Port 5173 is in use` | Encerrar o `npm run dev` anterior (ou usar a porta alternativa que o Vite indicar) |
| Tela branca após trocar de máquina | `node_modules` do sistema errado — aplicar a regra de ouro |
| `npm.ps1 cannot be loaded` | `Set-ExecutionPolicy RemoteSigned` (PowerShell como Administrador) |

## Marcos

| Tag | Conteúdo |
|---|---|
| `aula-02` | Projeto criado com Vite; primeira tela (App.jsx) |
