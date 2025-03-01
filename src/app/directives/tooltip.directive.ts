import { Directive, type ElementRef, Input, type OnDestroy, type OnInit, type Renderer2 } from "@angular/core"

@Directive({
  selector: "[appTooltip]",
})
export class TooltipDirective implements OnInit, OnDestroy {
  @Input("appTooltip") tooltipText = ""

  private tooltip: HTMLElement | null = null
  private mouseEnterListener: (() => void) | null = null
  private mouseLeaveListener: (() => void) | null = null

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.mouseEnterListener = this.renderer.listen(this.el.nativeElement, "mouseenter", () => this.showTooltip())

    this.mouseLeaveListener = this.renderer.listen(this.el.nativeElement, "mouseleave", () => this.hideTooltip())
  }

  ngOnDestroy() {
    if (this.mouseEnterListener) {
      this.mouseEnterListener()
    }

    if (this.mouseLeaveListener) {
      this.mouseLeaveListener()
    }

    this.hideTooltip()
  }

  private showTooltip() {
    if (!this.tooltipText) return

    this.tooltip = this.renderer.createElement("div")
    this.renderer.addClass(this.tooltip, "tooltip")
    const text = this.renderer.createText(this.tooltipText)
    this.renderer.appendChild(this.tooltip, text)
    this.renderer.appendChild(document.body, this.tooltip)

    // Position the tooltip
    const hostPos = this.el.nativeElement.getBoundingClientRect()
    if (!this.tooltip) return
    const tooltipPos = this.tooltip.getBoundingClientRect()

    const top = hostPos.top - tooltipPos.height - 10
    const left = hostPos.left + (hostPos.width - tooltipPos.width) / 2

    this.renderer.setStyle(this.tooltip, "top", `${top}px`)
    this.renderer.setStyle(this.tooltip, "left", `${left}px`)
    this.renderer.setStyle(this.tooltip, "opacity", "1")
  }

  private hideTooltip() {
    if (this.tooltip) {
      this.renderer.removeChild(document.body, this.tooltip)
      this.tooltip = null
    }
  }
}

