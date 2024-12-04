/* eslint-disable */
import EventEmitter from 'eventemitter3';

const eventBus = new EventEmitter();

export const addGlobalEventListener = (
  event: string,
  listener: (...args: any[]) => void
) => {
  eventBus.on(event, listener);
};

export const removeGlobalEventListener = (
  event: string,
  listener: (...args: any[]) => void
) => {
  eventBus.off(event, listener);
};

export const emitGlobalEvent = (event: string, ...args: any[]) => {
  eventBus.emit(event, ...args);
};
