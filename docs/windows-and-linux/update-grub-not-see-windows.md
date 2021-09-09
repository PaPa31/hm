---
id: update-grub-not-see-windows
title: Update Grub Not See Windows
date: 2021-09-09 13:10:48
---

In general, GRUB settings are made in the BIOS. And then they can be fixated by the command:

```bash
sudo update-grub
```

to linux.

## When the Windows bootloader is failed

The Windows bootloader may also break. I can test if it works by inserting my `8Gb Live CD/Flash` with `Windows.iso`, and then using the command in cmd:

```cmd
bcdboot c: \ windows / s c: / l en-us
```

and we fix it right here with 4 short commands:

```cmd
bootrec / fixmbr
bootrec / fixboot
bootrec / scanos
bootrec / rebuildbcd
```

and then restart bootloader again:

```cmd
bcdboot c: \ windows / s c: / l en-us
```

## When Windows bootloader is fine

When windows bootloader is working and the correct order of disks is set in the BIOS, then `sudo update-grub` should see windows. If not, you can try to go into`KDE Partition Manager` and mount the disk partition by adding a **mount point** (more about this in my docusaurus post: https://papa31.github.io/hm/docs/new-disk/partitioning-new-disk/#kde-partition-manager)

Learn more about setting up GRUB here (my OneNote post):
https://1drv.ms/u/s!ArW_zB-uhr61g-5wDrlhlrNRyKLeVQ?e=799eVC
