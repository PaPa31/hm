---
id: semantic-markup-cheat-sheet
title: Semantic Markup Cheat Sheet
date: 2022-05-28 11:47:08
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import styles from '@site/src/pages/styles.module.css';
import clsx from 'clsx';
import card from '@site/src/css/markdown.module.css';
```

## Description list

`<dl>`

- A list of descriptions is a group of terms and definitions.
- Words and definitions, titles and summaries, data points, etc.
- Only `<dt>` and `<dd>` elements can be direct children.

`<dt>`

- Description title, item term.
- Must come before `<dd>`.

`<dd>`

- The description definition, data, or text of the item.
- There can be multiple `<dd>` tags under one `<dt>`.

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="HTML">
{`<dl>
  <dt>Length</dt>
  <dd>2.3 m</dd>
  <dt>Weight</dt>
  <dd>4 tonnes</dd>
</dl>`}
    </CodeBlock>
  </div>
  <div className={card.maxwidth}>
    <BrowserWindow>
      <dl>
        <dt>Length</dt>
        <dd>2.3 m</dd>
        <dt>Weight</dt>
        <dd>4 tonnes</dd>
      </dl>
    </BrowserWindow>
  </div>
</div>

## Blockqoute

`<blockquote>`

- A large separate quote from another source.

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="HTML">
{`<blockquote>
  <p>Dinosaurs may be extinct from the face of the planet, but they are alive and well in our imaginations.</p>
  <footer>— <cite>Steve Miller</cite></footer>
</blockquote>`}
    </CodeBlock>
  </div>
  <div className={card.maxwidth}>
    <BrowserWindow>
      <blockquote>
        <p>Dinosaurs may be extinct from the face of the planet, but they are alive and well in our imaginations.</p>
        <footer>— <cite>Steve Miller</cite></footer>
      </blockquote>
    </BrowserWindow>
  </div>
</div>

`<q>`

- A small quotation embedded within other content.

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="HTML">
{`Other languages <q>tongue</q> as said stranger.`}
    </CodeBlock>
  </div>
  <div className={card.maxwidth}>
    <BrowserWindow>
      Other languages <q>tongue</q> as said stranger.
    </BrowserWindow>
  </div>
</div>

## Address

`<address>`

- Contact information, email, telephone, postal address, etc.

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="HTML">
{`<address>
  Jet Propulsion Laboratory
  <br/>4800 Oak Grove Drive
  <br/>Pasadena, California
  <br/>91109
</address>`}
    </CodeBlock>
  </div>
  <div className={card.maxwidth}>
    <BrowserWindow>
      <address>
        Jet Propulsion Laboratory
        <br/>4800 Oak Grove Drive
        <br/>Pasadena, California
        <br/>91109
      </address>
    </BrowserWindow>
  </div>
</div>

## Text edit

`<del datetime="…">`

- Content that was removed after the document was posted. `datetime` specifies when it was deleted.

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="HTML">
{`<p>Launchpad 39A owned by <del datetime="2014-04-14">NASA</del> <ins datetime="2014-04-14">SpaceX</ins></p>`}
    </CodeBlock>
  </div>
  <div className={card.maxwidth}>
    <BrowserWindow>
      <p>Launchpad 39A owned by <del datetime="2014-04-14">NASA</del> <ins datetime="2014-04-14">SpaceX</ins></p>
    </BrowserWindow>
  </div>
</div>

## Abbreviation

`<abbr title="…">`

- An acronym or abbreviation, such as "HTML", etc. `title` contains an extended version, such as "Hypertext Markup Language" on mouseover.

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="HTML">
{`I don't now <abbr title="Star Trek: The Wrath of Khan">ST:TWOK</abbr> ????`}
    </CodeBlock>
  </div>
  <div className={card.maxwidth}>
    <BrowserWindow>
      I don't now <abbr title="Star Trek: The Wrath of Khan">ST:TWOK</abbr> ????
    </BrowserWindow>
  </div>
</div>

## Other language

`<i>`

- Defines a technical term, ship name, book title, thought, sarcasm, other language.

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="HTML">
{`<i lang="fr">Bonjour</i>`}
    </CodeBlock>
  </div>
  <div className={card.maxwidth}>
    <BrowserWindow>
      <i lang="fr">Bonjour</i>
    </BrowserWindow>
  </div>
</div>

## Progress

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="HTML">
{`<progress value="3" min="1" max="5" />`}
    </CodeBlock>
  </div>
  <div className={card.maxwidth}>
    <BrowserWindow>
      <progress value="3" min="1" max="5" />
    </BrowserWindow>
  </div>
</div>

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="HTML">
{`<meter value="13" min="1" max="20" />`}
    </CodeBlock>
  </div>
  <div className={card.maxwidth}>
    <BrowserWindow>
      <meter value="13" min="1" max="20" />
    </BrowserWindow>
  </div>
</div>

 <p>Save the document by pressing <kbd>Ctrl + S</kbd></p>

  <p>Message from my computer:</p>
<p><samp>File not found.<br/>Press F1 to continue</samp></p>

 <code>
x = 5;
y = 6;
z = x + y;
</code>

 <pre>
<code>
x = 5;
y = 6;
z = x + y;
</code>
</pre>

 <p>The area of a triangle is: 1/2 x <var>b</var> x <var>h</var>, where <var>b</var> is the base, and <var>h</var> is the vertical height.</p>

Argentinosaurus weighted approximately <data value="90">90 tonnes</data>
