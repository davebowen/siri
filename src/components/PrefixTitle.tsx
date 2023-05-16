import type { JSXElement } from "solid-js"
import { Title } from "solid-start"

export default function (props: { children?: JSXElement }) {
  return <Title>戴夫的秘密花园{props.children ? " | " + props.children : ""}</Title>
}
