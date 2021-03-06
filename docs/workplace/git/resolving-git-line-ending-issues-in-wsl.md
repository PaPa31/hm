
## Resolving Git line ending issues in WSL (resulting in many modified files)

[source](https://code.visualstudio.com/docs/remote/troubleshooting#_resolving-git-line-ending-issues-in-containers-resulting-in-many-modified-files)

Since Windows and Linux use different default line endings, Git may report a large number of modified files that have no differences aside from their line endings. To prevent this from happening, you can disable line-ending conversion using a `.gitattributes` file or globally on the Windows side.

Typically adding or modifying a `.gitattributes` file in your repository is the most reliable way to solve this problem. Committing this file to source control will help others and allows you to vary behaviors by repository as appropriate. For example, adding the following to `.gitattributes` file to the root of your repository will force everything to be LF, except for Windows batch files that require CRLF:

```
* text=auto eol=lf
*.{cmd,[cC][mM][dD]}  text eol=crlf
*.{bat,[bB][aA][tT]}  text eol=crlf
```

Note that this works in **Git v2.10+**, so if you are running into problems, be sure you've got a recent Git client installed. You can add other file types in your repository that require CRLF to this same file.

If you would prefer to still always upload Unix-style line endings (LF), you can use the `input` option.

```
git config --global core.autocrlf input
```

If you'd prefer to disable line-ending conversion entirely, run the following instead:

```
git config --global core.autocrlf false
```

Finally, you may need to clone the repository again for these settings to take effect.


11/6/2020