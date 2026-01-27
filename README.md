<div align="center">

  <h1>
    User2Root Mobile
    <img
      src="https://github.com/user-attachments/assets/cad12624-ae13-48d6-a057-eeecd74e51de"
      alt="android"
      width="32"
      style="vertical-align: middle;"
    />
  </h1>

  <p>
    Este repositório contém <strong>métodos de root organizados por fabricante e modelo</strong>,
    com foco em <strong>reprodutibilidade</strong>, <strong>segurança</strong> e
    <strong>aderência a boas práticas</strong>
    (Magisk, bootloader unlock, imagens oficiais).
  </p>

  <blockquote>
    ⚠️ <strong>Aviso importante</strong>: Root envolve riscos reais (brick, perda de garantia,
    quebra de Play Integrity/SafetyNet). Utilize <strong>apenas em dispositivos de teste</strong>
    ou sob sua responsabilidade.
  </blockquote>

  <img
    src="https://github.com/user-attachments/assets/7140fe30-29c3-49d7-87a0-856baa052579"
    alt="User2Root Mobile"
    width="600"
  />

</div>


## 🎯 Objetivo

Centralizar **procedimentos confiáveis de root** para diferentes dispositivos Android, documentando:

* Pré‑requisitos (bootloader, opções do desenvolvedor)
* Método correto por fabricante
* Armadilhas comuns e validações
* Fluxo moderno com **Magisk (systemless)**

---

## 📋 Pré‑requisitos Gerais

* Opções do Desenvolvedor habilitadas
* **Desbloqueio de OEM** ativado
* **Depuração USB** ativa
* Bootloader desbloqueado
* ROM **exata** do dispositivo (build id compatível)

---

## 🛠️ Ferramentas Utilizadas

* **Magisk**
* **ADB / Fastboot**
* **Odin** (Samsung)

---

## ✅ Validações Pós‑Root

* Boot sem bootloop
* Magisk ativo
* `su` funcional
* Play Integrity / SafetyNet (quando aplicável)
