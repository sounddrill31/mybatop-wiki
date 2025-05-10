---
title: Installation from Source
#order: TODO
order: 2
---

# Installation from Source

1. Download latest version of mybatop source tarball or zip file from `Downloads` page.

2. Open terminal and navigate to the directory where the downloaded file is located.

    e.g.

    ```bash
    cd ~/Downloads
    ```
3. unzip the tarball or extract the zip file.

    e.g.

    ```bash
    tar -xvf mybatop-*.tar.gz
    ```

    or

    ```bash
    unzip mybatop-*.zip
    ```

4. Navigate to the extracted directory.

    e.g.

    ```bash
    cd mybatop-*
    ```

5. create `mybatop` directory in /opt folder

    e.g.

    ```bash
    sudo mkdir /opt/mybatop
    ```

6. Move all the contents of `filesystemd` directory to `/etc/systemd/system/` directory.

    e.g.

    ```bash
    sudo cp filesystemd/* /etc/systemd/system/
    ```

7. Remove filesystemd directory (Optional)

    e.g.

    ```bash
    rm -rf filesystemd
    ```

8. Copy the extracted files to `/opt/mybatop` directory.

    e.g.

    ```bash
    sudo cp -r * /opt/mybatop
    ```

9. make a link to the binary file in `/usr/bin` directory.

    e.g.

    ```bash
    sudo ln -s /opt/mybatop/scripts/runscript/mybatop /usr/bin/mybatop
    ```

10. Reload systemd daemon

    e.g.

    ```bash
    sudo systemctl daemon-reload
    ```

11. Start the service

    e.g.

    ```bash
    sudo systemctl enable --now mybatop-startup.service
    sudo systemctl enable --now mybatop-shutdown.service
    sudo systemctl enable --now mybatop-status.service
    sudo systemctl enable --now mybatop-lowpower.service
    ```

12. Check the status of the service

    e.g.

    ```bash
    systemctl status mybatop-startup.service
    systemctl status mybatop-shutdown.service
    systemctl status mybatop-status.service
    systemctl status mybatop-lowpower.service
    ```

13. Check installation is done successfully

    e.g.

    ```bash
    mybatop --version
    ```

14. Done! mybatop is installed successfully. 