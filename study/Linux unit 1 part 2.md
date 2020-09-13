<strong>Root Account</strong>
-----------------------------

'Root' is the special account in Linux. It is different from regular users as it has special rights and powers that regular accounts will never have. It is a user account for administrative purposes and usually it has the highest access rights on the system.

Root Account is a privileged account because it has many special rights. Root is also known as "SuperUser" because it is more powerful than regular users. Superuser is abbreviated as "SU" in Linux and the commands su and sudo can be used to perform certain actions as if they are being performed by the root account (and hence get all the privileges).

The special powers of root account are called root privileges. It can read and write any files on the system, perform operations as any user, change system configuration, install and remove software, and upgrade the operating system and/or firmware. Practically, it can do pretty much anything on the system.

-------------------

MX Record wale question ka answer bahut ajeeb sa hai...vo leave kar diya hai

-------------------

How do you check memory usage in Linux?
---------------------------------------

2 Commands hote hai - df & free...inki description unit 4 wali PDF me mil jayegi

-------------------

Linux Boot Sequence
-------------------

The <ins><strong>boot sequence</strong></ins> in Linux starts when the computer is turned on, and it gets completed when the kernel is initialized and systemd is launched. After that <strong><ins>startup process</strong></ins> takes over and finishes the task of getting the Linux computer into an operational state.

The boot sequence of Linux can be triggered in multiple ways. The most common way is when power is turned off, as soon as power is turned on for a Linux computer, the boot sequence starts.

First step in the boot process is to check and initialise the hardware components. This is done by POST (Power-On Self Test) system which is a part of BIOS (Basic Input Output System). POST is the part of BIOS whose task is to ensure that the computer hardware functioned correctly. If POST fails, the computer may not be usable and so the boot process does not continue.

If BIOS POST completes successfully, the boot sector(first sector) of any attached bootable devices is loaded into the RAM. Then, this code will be executed. This special code is called the <ins><strong>Boot-Loader</strong></ins>. 

Boot-Loader is always the first software that runs on any system. Its only function is to get other parts of software ready for use. This usually means that it loads the OS kernel onto the RAM. There are most used BootLoaders in Linux :- GRUB, GRUB2 and LILO. GRUB2 is the newest, and default bootloader for newer Linux versions. 

All kernels are stored in compressed format to save space. So, as soon as kernel is loaded, it initialises itself by extracting self so that it can perform any useful work. It loads 'systemd' which will start the Startup Process. After kernel has been initialised, Boot Sequence finishes and Startup Process starts which will get different parts of OS ready for usage.

LILO ( LInux LOader )
---------------------

<ul>
	<li> It is the oldest Linux Bootloader. However, due to continued community support it still remains a viable bootloader</li>
	<li> It doesn't have an interactive Command Line Interface(CLI) </li>
	<li> It doesn't support booting from network </li>
	<li> LILO stores the path of OS in its config file, so it can load itself in RAM. So, if config file is changed we need to re-configure the RAM also.</li>
	<li> Highly secure and Consistent </li>
</ul>

GRUB ( GRand Unified Bootloader)
--------------------------------

<ul>
	<li> It was developed by FSF (Free Software Foundation) under GNU, and is a more recent bootloader than LILO </li>
	<li> It has an interactive CLI </li>
	<li> It supports booting system from the network. </li>
	<li> Changing the config file or a wrongly configured RAM, can leave the system unbootable </li>
	<li> Slightly less secure and slightly less consistant than LILO </li>
</ul>

------------------

Command Line Interface(CLI)
---------------------------

The Command Line Interface (CLI), is a non-graphical, text-based interface to the computer system, where the user types in a command and the computer then successfully executes it. The Linux Terminal is the platform that provides CLI environment for operating Linux to the user.

The CLI terminal accepts the commands that the user types and passes them to a shell. The shell then receives and interprets what the user has typed into the instructions that can be executed by the OS. If any output is produced by the command, then that text is displayed in the terminal. If any of the problems with the commands are found, then some error message is displayed.

---------------------

Why is Linux Portable?
----------------------

Kyonki use aisa design kiya gaya tha. Open source hai isiliye logo ne aisa bana diya. Mostly devices pe run kar sakti hai ab kyonki uska kernel device dependant nahi hai. Isi ko thoda explain kar dena.

----------------------

Swap Space in Linux
-------------------
Swap space in Linux is used when the RAM is full. If the system needs more memory resources and the RAM is already full, inactive pages in memory are moved to the swap space. While swap space can help machines with a small amount of RAM, it should not be considered a replacement for more RAM. 

Swap space is located on hard drives therefore it has a slower access time than physical memory(RAM). Swap space can be a dedicated swap partition (space in memory), a swap file, or a combination of swap partitions and swap files.

The recommended amount of swap space has increased linearly with the amount of RAM in the system. But because the amount of memory in modern systems has increased into the hundreds of gigabytes, it is now recognized that the amount of swap space that a system needs is dependant on the memory workload of that system. However, given that swap space is usually designated at install time, and that it can be difficult to determine beforehand the memory workload of a system.

----------------------

Run-Level in LINUX
------------------

A Runlevel is one of the modes that a Unix-based OS like Linux will run in. Each runlevel has
a certain number of services stopped or started, giving the user control over the behavior of the
machine. Conventionally, seven runlevels exist, numbered from zero to six.

The system can be booted into only one runlevel at a time. By default, a system boots either to runlevel 3 or to runlevel 5. Runlevel 3 is CLI, and 5 is GUI. The default runlevel is specified in /etc/inittab file in most Linux operating systems. Using runlevel, we can easily find out whether X is running, or network is operational, and so on. 

The important thing to note here is that there are differences in the runlevels according to the operating system. The standard LINUX kernel supports these seven different runlevels :

<ol start="0">
	<li> System halt i.e the system can be safely Shut Down. </li>
	<li> Single user mode (with no networking). </li>
	<li> Multiple user mode with no NFS(network file system). </li>
	<li> Multiple user mode with CLI and not GUI. </li>
	<li> User-definable mode. </li>
	<li> Multiple user mode with GUI. This is the standard runlevel for most of the LINUX based systems. </li>
	<li> Reboot, which is used to restart the system. </li>
</ol>

To check the runlevel of the system we run the following command:
```
$ runlevel
  N 3
```
Here, 'N' indicates that runlevel has not been changed and 3 is the runlevel (CLI mode).

To change the runlevel of the system we run the following command:
```
$ init 5
```
Here, runlevel has been changed to 5 which is GUI mode.


