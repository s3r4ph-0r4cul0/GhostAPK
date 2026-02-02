# Root Samsung Galaxy S8 (Magisk + Odin4 – Linux)

Este guia descreve **passo a passo** como obter **root no Samsung Galaxy A30s** usando **Magisk** e **Odin4** em **Linux**.

> ⚠️ **Aviso**: O processo **desbloqueia o bootloader**, ativa **KNOX 0x1** (irreversível) e pode causar perda de dados. Execute **apenas em dispositivo de teste** e por sua conta e risco.

---

## 📱 Dispositivo

* **Modelo**: Samsung Galaxy S8 (SM-G950*)
* **Plataforma**: Exynos
* **Bootloader**: Odin (sem fastboot)
* **Método**: Magisk (patch do AP)

---

## 🧩 Pré-requisitos

### No aparelho

* Opções do Desenvolvedor habilitadas
* **Desbloqueio de OEM**: ATIVADO
* **Depuração USB**: ATIVA
* Bateria ≥ 50%

### No Linux

* **ADB (Android Platform Tools)** instalado
* **Odin4** (binário para Linux)
* **Magisk APK** (última versão estável)
* **lz4** (para extração, se necessário)
* Cabo USB de boa qualidade

---

## 📦 Baixar a ROM Stock correta

Baixe a **ROM oficial exatamente igual** à instalada no aparelho (mesmo CSC/build):

* **[https://samfw.com/](https://samfw.com/)**

Caso não saiba qual a ROM o dispositivo esteja usando no moneto pode executar o comando:

```
adb devices
adb shell
getprop ro.build.fingerprint
```

Após extrair, você terá arquivos como:

```
AP_xxx.tar.md5
BL_xxx.tar.md5
CP_xxx.tar.md5
CSC_xxx.tar.md5
```

> **Importante**: o root no Samsung é feito **patchando o AP**.

---

## 🛠️ Patch do AP com Magisk

No momento em que esse tutorial foi realizado o magisk.apk utilizado foi: Magisk v30.6

1. Copie `AP_xxx.tar.md5` para o armazenamento interno do celular (rota mais comum: `/sdcard/Download/`)
2. Instale e abra o **Magisk**
3. Vá em **Install → Select and Patch a File**
4. **Desmarque a opção "Recovery Mode"**
5. Selecione `AP_xxx.tar.md5`
6. Aguarde o patch

O Magisk irá gerar:

```
magisk_patched.tar
```

Copie esse arquivo de volta para o PC.

---

## ⬇️ Entrar em Download Mode

1. Desligue o aparelho
2. Conecte o cabo USB ao PC
3. Pressione e segure:

```
(Volume +)  +  (Volume -)
```

4. Na tela de aviso, pressione **Volume +** para confirmar

Você verá:

```
Downloading...
Do not turn off target
```

---

## ⚙️ Flash com Odin4 (Linux)

1. Abra o **Odin4** no Linux
2. Conecte o aparelho (ID:COM deve reconhecer)

### Cenário A — Patch **SEM Recovery Mode** (mais comum)

* **BL** → `BL_xxx.tar.md5`
* **AP** → `magisk_patched.tar`
* **CP** → `CP_xxx.tar.md5`
* **CSC** → `CSC_xxx.tar.md5`

> ⚠️ Use **CSC** (não HOME_CSC) para evitar bootloop após unlock.

4. Auto Reboot 

---

## 🔁 Primeiro boot (crítico)

Após o flash:

* O aparelho pode **reiniciar normalmente**

---

## ✅ Verificação do Root

Após o boot:

* Abra o **Magisk**
* Status deve estar **Installed**
* Teste:

```bash
adb shell
su
```

---

## 🧪 Problemas comuns

### Bootloop

* AP não corresponde à ROM instalada
* HOME_CSC usado incorretamente

### Magisk não aparece

* Primeiro boot feito sem combinação correta de teclas

### Apps detectam root

* Usar **Zygisk** + **DenyList**
* Considerar módulos de bypass (ambiente de teste)

---

## 🧠 Notas técnicas

* Samsung **não usa fastboot**
* Root é **systemless** (boot image)
* KNOX **não pode ser revertido**

---

## ⚠️ Disclaimer

Conteúdo **educacional**. O autor não se responsabiliza por danos, perda de dados ou uso indevido destas instruções.
