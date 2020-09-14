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

------------------

Archiving in Linux
------------------

Archiving is the process of the combining multiple files and directories(same or different size) into a single file. On the other hand, compression is the process of reducing the size of of a file(s) or directory(s). 

Archiving is often used as a part of system backups or while moving the data from one system to another. The most common types of archives are:
<ol>
	<li> Tar (Tape ARchive) </li>
	<li> Zip </li>
</ol>

Tar Command in Linux
--------------------

Tar is a command which stands for Tape ARchive. It is used to create arhive files from multiple files or directories. The resultant archive will have the extension '.tar'.
There are 4 main operating modes in tar utility.

c - Create an archive from a file(s) or directory(s).
x - Extract an archive.
r - Append files to the end of an archive.
t - List the contents of the archive.

<strong>Example:</strong> Suppose there exists a folder named work, which contains 3 files, 
```
$ ls work/
 file.txt song.mp3 image.jpg
```
Now, we can create an archive in 2 ways, either we can archive the whole directory or we can create an archive of the 3 files.
```
$ tar cf work.tar work/
```
The above command will create an archive 'work.tar' from the directory work/ . Here, 'c' stands for Creation mode and 'f' stands for File Name. Now, if we want to create an archive from the files we will use the command
```
$ cd work
$ tar cf work.tar file.txt song.mp3 image.jpg
```

To extract an archive in the current directory we will use 'x' for Extraction Mode
```
$ tar xf work.tar
```

To view the contents of an existing archive without extracting it we can use 't' for Viewing Mode
```
$ tar tf work.tar
 file.txt
 song.mp3
 image.jpg
```

Gzipped and Bzipped Archives
----------------------------

By default, Tar creates the archive file ending with .tar extension. But, tar command can be used with compression commands gzip and bzip2. (So That archive file also gets compressed). The file ending with .tar extension refers to a plain tar archive but, the file ending with tar.gz or .tgz refers a gzipped archive and the file ending with tar.bz2 or .tbz refers bzipped archive, respectively.

To create a gzipped archive:
```
$ tar czf work.tar.gz file.txt song.mp3 image.jpg

//OR

$tar czf work.tgz file.txt song.mp3 image.jpg
```

gzip archive adds a 'z' flag to the command. Similarly, Bzip2 will add the 'j' flag
```
$ tar cjf work.tar.bz2 file.txt song.mp3 image.jpg

//OR

$tar cjf work.tbz file.txt song.mp3 image.jpg
```

These compression techniques are widely used in Linux becuase of their zero data loss while compression and extraction. They are really fast and efficient while compression. Their size reduction ratio of the compressed file is also very high. However, there is only one major drawback of these, that they are not cross-platform tools. For Windows, it is not easy to extract .tgz files and it takes time. For cross-platform compression we use 'zip'

Zip Archive & Compression
-------------------------

Zip is simple command that not only creates an archive but also compresses it. Its functioning is equivalent to .tgz or .tbz but it is cross-platform supported and it is very flexible. It also supports many features like multi-part archives, compression rate and encryption.

To create a zip file from a file or directory, we can simply write
```
zip work.zip work/

//OR

zip files.zip file.txt file2.txt file3.txt file4.txt
```

Extracting files is also very simple, and we can use '-l' flag for viewing the contents of the zipped file without extracting it.

```
unzip files.zip

//OR (if you only want to see contents not extract)

unzip -l files.zip
```

Zip supports many different features, for example we can create an encrypted archive by using the '-e' flag while creating archive. In the following command, files.zip will be an encrypted archive.
```
zip -e files.zip file.txt file2.txt file3.txt file4.txt
```

We can even specify the compression rate(how much the file should be compressed). In the following command, we are creating an encrypted archive with a compression rate of 9(maximum).
```
zip -e -9 files.zip file.txt file2.txt file3.txt file4.txt
```

Sometimes a single archive file may become large even after compression so we can create a multi-part archive, so that it is easier to share or send through internet. Multi-part archive is a single archive that is divided into many files. For extraction of a multi-part archive all its parts must be in the same directory and extracting any one part will automatically extract other parts also. 
```
zip -s 3m files.zip work/
```
This command will create a multi-part archive with files 3MB each.

------------------------

Default Permissions in Linux
----------------------------

In Linux, the default file or directory permissions are decided by umask. The default umask value is 0022, which sets the default permission for a new file or directory. 
Default permission for a directory is 0777 and for files permissions are 0666 from which the default umask value 0022 is deducted to get the newly created files or directory permission.

Final default permission for a file is calculated as shown below:

Default file permission: 666
Default umask : 022
Final default file permission: 644

Final default permission for a directory is calculated as shown below:

Default directory permission: 777
Default umask: 022
Final default directory permission: 755

You can change the umask value to appropriate value of what you need based upon the above calculation. For example, if you don’t want anybody other than the user (owner) to do anything on the file or directory then you can give umask as 0077.
```
$ umask 0077
```
After this, if you create a file or directory, it will have permissions only for the user as shown below:
```
$ > testfile
$ ls -l testfile
-rw------- 1 sathiya sathiya 0 Mar 17 08:23 testfile
```
