<h1 align="center">
  User2Root Mobile
  <img
    src="https://github.com/user-attachments/assets/cad12624-ae13-48d6-a057-eeecd74e51de"
    alt="android"
    width="32"
    style="vertical-align: middle;"
  />
</h1>



Este repositório contém **métodos de root organizados por fabricante e modelo**, com foco em **reprodutibilidade**, **segurança** e **aderência a boas práticas** (Magisk, bootloader unlock, imagens oficiais).

> ⚠️ **Aviso importante**: Root envolve riscos reais (brick, perda de garantia, quebra de Play Integrity/SafetyNet). Utilize **apenas em dispositivos de teste** ou sob sua responsabilidade.



<h1 align="center"> <img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/7140fe30-29c3-49d7-87a0-856baa052579" /> </h1>



---

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
