export class Event {
  constructor (
    public title: string,
    public description: string,
    public location: string,
    public starts_at: Date,
    public ends_at: Date
  ) {}
}
