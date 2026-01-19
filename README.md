# Judy Punk - User Manual

## 1. Introduction
**Judy-Punk** (Internal ID: `judy-punk`) is a defensive-only IT & Cybersecurity assistant designed to act as a "Co-Pilot" for System Administrators and Security Analysts. It operates on the principle of **Augmented Intelligence**, meaning it actively assists in monitoring, diagnosing, and explaining system states but does **not** autonomously execute destructive or administrative actions.

### What It Is
*   A local-first system monitor and chat interface.
*   A read-only diagnostic tool for identifying anomalies.
*   A "Tutor" that explains security concepts and findings.
*   A "Zero-Trust" agent that requires explicit human approval for external connections or file reads.

### What It Is Not
*   An autonomous "Auto-Fixer" or "Healer".
*   A replacement for a human Administrator.
*   A "Black Box" (All actions are logged and transparent).
*   An offensive hacking tool (Offensive keywords and tools are strictly blocked).

### Security Posture
*   **Zero-Trust**: The system assumes it has no implicit permission to act.
*   **Least Privilege**: Default operations are read-only / user-space.
*   **Local Execution**: AI inference (via Ollama) and logic run locally on the machine.

---

## 2. Interaction Model
The primary interface is a Chat Panel combined with a Terminal Log. Interactions fall into two categories:

### Natural Language
You can converse with the agent as you would a colleague.
*   *"What is my current system load?"*
*   *"Explain why I might be seeing high CPU usage."*

### Explicit Tool Invocations
When the Agent determines a specific technical action is needed (e.g., scanning a network or reading a file), it will **not** run it silently.
1.  **Request**: The Agent presents a **"Tool Request"** card in the chat.
2.  **Review**: You see exactly what tool (`network_scan`) and what arguments (`mode: interfaces`) are proposed.
3.  **Approval**: You must click **[Approve]** to execute the action.

---

## 3. Core Commands & Capabilities

### Status & Health
*   **Capability**: Real-time retrieval of CPU load, Memory usage, Platform info, and Distro details.
*   **Method**: `systeminformation` library (local calls).
*   **Usage**: Ask *"How are we doing?"* or *"Run diagnostics"*.

### Network Awareness
*   **Capability**: Enumeration of local network interfaces and active TCP/UDP connections.
*   **Constraint**: Filters out loopback traffic. Read-only.
*   **Usage**: *"Scan for active connections"* or *"List network interfaces"*.

### Log Awareness
*   **Capability**: Reading specific system log files (e.g., within `/var/log`).
*   **Constraint**: Strictly path-limited. Cannot read user documents or sensitive system keys (e.g., `/etc/shadow`).
*   **Usage**: *"Check the auth log for failures"*.

### Web Knowledge (Security Posture)
*   **Capability**: Fetching pages from a strict **Allowlist** of high-trust domains (NIST, MITRE, GitHub, Microsoft, Linux vendors) to verify CVEs or patches.
*   **Usage**: *"Check nvd.nist.gov for CVE-2024-XXXX"*.

---

## 4. Safety & Guardrails

### Requires Explicit Confirmation
*   **Web Access**: Any external HTTP request.
*   **Network Scanning**: Any enumeration of interfaces or connections.
*   **File Reading**: Accessing logs or config files.

### Admin Approval (Privileged Access)
For restricted system logs (e.g. `/var/crash`, system journal), the agent may request **Admin Approval**.
*   **Mechanism**: The OS will present a native password dialog (`pkexec`).
*   **Scope**: Permission is granted **only** for that specific read command.
*   **Expiration**: Permissions expire immediately after the command completes.
*   **Blocking**: You can click "Cancel" on the system dialog to deny the request safely.

### Intentionally Blocked
*   **Offensive Tools**: Keywords like `nmap`, `metasploit`, `reverse shell` trigger the Security Guard.
*   **Destructive Commands**: `rm`, `dd`, `format`, `mkfs`.
*   **Privilege Escalation**: `sudo`, `su`, `chown` (The agent should explain how to do it, not do it itself).

---

## 5. Example Queries

### Plain English
> "My internet feels slow. Can you check the active connections?"
> *Agent Response*: Generates a `network_scan` request for you to approve.

### Command-Style
> "Analyze /var/log/auth.log"
> *Agent Response*: Generates a `read_log` request for that specific path.

### Tutor Mode
> "What does 'chmod 777' mean and why is it bad?"
> *Agent Response*: Explains file permissions and the security risk of world-writable files without executing any command.

---

## 6. Limitations & Assumptions
*   **Early-Stage**: The system currently relies on the user to interpret raw log data provided by the agent.
*   **Platform**: Linux-first focus. Windows compatibility is "Best Effort".
*   **Ollama Dependency**: Requires a local Ollama instance running (default port 11434).
*   **Non-Goal**: We do not intend to compete with full EDR (Endpoint Detection and Response) suites but rather provide a human-centric interface to basic system data.
