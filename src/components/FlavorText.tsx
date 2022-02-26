import React from 'react'

type Props = {
  text: string
}

const FlavorText: React.FC<Props> = ({ text }) => (
  <div>
    {/**
     * split() メソッドは、 String を指定した区切り文字列で分割することにより、文字列の配列に分割します。
     * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split
     */}
    {text.split(/(\n)/).map((t, id) => (
      <React.Fragment key={id}>{t === `\n` ? <br /> : t}</React.Fragment>
    ))}
  </div>
)

export default FlavorText
