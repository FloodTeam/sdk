import { Component, ComponentInterface, Prop, h } from "@stencil/core";

@Component({
  tag: "floodteam-init",
})
export class Init implements ComponentInterface {
  @Prop() token?: string;
  @Prop() host?: string;
  @Prop() functionsHost?: string;

  componentDidLoad() {
    (window as any).FloodTeam.init({
      host: this.host,
      token: this.token,
      functionsHost: this.functionsHost,
    });
  }

  render() {
    return <slot />;
  }
}
