import { Label } from '@/components/ui/label'
import { Section } from '@/components/atoms/section'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  return (
    <Section component="section">
      <h2 className="mb-8 text-center text-2xl">Contact us</h2>

      <form className="mx-auto flex max-w-lg flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" />
          </div>
          <div>
            <Label htmlFor="email">
              E-mail
              <span className="text-red-500">*</span>
              <span className="sr-only">(required)</span>
            </Label>
            <Input type="email" id="email" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input type="phone" id="phone" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" className="max-h-[200px]" />
        </div>
        <Button size="lg" type="submit" className="w-fit">
          Send
        </Button>
      </form>
    </Section>
  )
}
