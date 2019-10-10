export enum EventType {
  CALL = 'Call',
  MEETING = 'Meeting'
}

interface IEventBase {
  id: string;
  type: EventType;
  name: string;
  eventDate: Date;
  createdDate: Date;
}

export interface ICallParticipant {
  email: string;
}

export interface IMeetingParticipant {
  name: string;
}

export interface ICall extends IEventBase {
  participants: ICallParticipant[];
}

export interface IMeeting extends IEventBase {
  address: string;
  participants: IMeetingParticipant[];
}

export type TEvent = ICall | IMeeting;

export interface IForm {
  getForm: () => void;
  setValue: (event: TEvent) => void;
}

export interface AbstractFormData {
  [key: string]: any;
}
