import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Section } from '@/components/atoms/section'

export default function CommissionPage() {
  return (
    <Section component="section">
      <h2 className="mb-8 text-center text-2xl">Commission Request</h2>
      <div className="mx-auto flex max-w-2xl flex-col gap-4 rounded-3xl border-2 border-cod/60 p-12 text-cod hover:border-cod">
        <p>Please read first:</p>
        <p>
          I handle commission requests in the order they are received, but
          please note that I can only take on a limited number at a time. Please
          allow a couple of weeks for a response to your commission request.
        </p>
        <p>
          I want to ensure the best possible experience for both of us, so I
          reserve the right to accept or decline any commissions.
        </p>

        <p>
          After setting all the necessary details, I will provide you with a
          quote. To proceed, I kindly ask for a 50% down payment.
        </p>
        <p>From start to finish, the entire process can take up to 4 months.</p>
        <p>The remaining balance will be due upon completion.</p>

        <p>
          Custom work pricing varies widely based on specific requirements but
          prices start at $49,99.
        </p>
        <p>~ Site</p>
        <label htmlFor="understand">
          <input type="checkbox" id="understand" className="mr-2" />I understand
        </label>

        <hr className="my-4" />
        <form className="flex w-full flex-col gap-4">
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
            <Label htmlFor="message">Specify your request</Label>
            <Textarea id="message" className="max-h-[200px]" />
          </div>
          <Button size="lg" type="submit" className="w-fit">
            Send
          </Button>
        </form>
      </div>
    </Section>
  )
}
