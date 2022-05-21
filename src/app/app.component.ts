import { Component } from "@angular/core";
import { Quote } from "interfaces/quote.interface";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    title = "challenge-moviik";

    quotes: Quote[] = [
        {
            id: "5a6ce86e2af929789500e7e4",
            author: "Edsger W. Dijkstra",
            en: "Computer Science is no more about computers than astronomy is about telescopes.",
        },
        {
            id: "5a6ce86e2af929789500e7d7",
            author: "Edsger W. Dijkstra",
            en: "Simplicity is prerequisite for reliability.",
        },
        {
            id: "5a6ce86d2af929789500e7ca",
            author: "Edsger W. Dijkstra",
            en: "The computing scientist’s main challenge is not to get confused by the complexities of his own making.",
        },
        {
            id: "5a6ce86f2af929789500e7f3",
            author: "Edsger W. Dijkstra",
            en: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
        },
        {
            id: "5a6ce86e2af929789500e7d9",
            author: "Edsger W. Dijkstra",
            en: "A program is like a poem: you cannot write a poem without writing it. Yet people talk about programming as if it were a production process and measure „programmer productivity“ in terms of „number of lines of code produced“. In so doing they book that number on the wrong side of the ledger: We should always refer to „the number of lines of code spent“.",
        },
        {
            id: "5a6ce86f2af929789500e7f8",
            author: "Tony Hoare",
            en: "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.",
        },
        {
            id: "5a6ce86f2af929789500e807",
            author: "Jeff Hammerbacher",
            en: "The best minds of my generation are thinking about how to make people click ads.",
        },
        {
            id: "5a6ce86f2af929789500e7f9",
            author: "Edsger W. Dijkstra",
            en: "The tools we use have a profound and devious influence on our thinking habits, and therefore on our thinking abilities.",
        },
        {
            id: "5a6ce86f2af929789500e7f5",
            author: "Edsger W. Dijkstra",
            en: 'How do we convince people that in programming simplicity and clarity — in short: what mathematicians call "elegance" — are not a dispensable luxury, but a crucial matter that decides between success and failure?',
        },
        {
            id: "5a6ce86f2af929789500e80b",
            author: "Fred Brooks",
            en: "Adding manpower to a late software project makes it later.",
        },
        {
            id: "5a6ce86f2af929789500e809",
            author: "Michael Stal",
            en: "Sometimes there is a silver bullet for boosting software engineering productivity. But you need to shoot the right person.",
        },
        {
            id: "5a6ce86f2af929789500e815",
            author: "Fred Brooks",
            en: "Nine women can't make a baby in one month.",
        },
        {
            id: "5a6ce86f2af929789500e81a",
            author: "Jeff Sickel",
            en: "Deleted code is debugged code.",
        },
        {
            id: "5a6ce86f2af929789500e826",
            author: "Ken Thompson",
            en: "When in doubt, use brute force.",
        },
        {
            id: "5a6ce86f2af929789500e814",
            author: "Fred Brooks",
            en: "When a task cannot be partitioned because of sequential constraints, the application of more effort has no effect on the schedule. The bearing of a child takes nine months, no matter how many women are assigned.",
        },
        {
            id: "5a6ce86f2af929789500e816",
            author: "Fred Brooks",
            en: "If each part of the task must be separately coordinated with each other part, the effort increases as n(n-1)/2. Three workers require three times as much pairwise intercommunication as two; four require six times as much as two.",
        },
        {
            id: "5a6ce86f2af929789500e818",
            author: "Fred Brooks",
            en: "Having a system architect is the most important single step toward conceptual integrity. After teaching a software engineering laboratory more than 20 times, I came to insist that student teams as small as four people choose a manager and a separate architect.",
        },
        {
            id: "5a6ce86f2af929789500e80f",
            author: "Fred Brooks",
            en: "The programmer, like the poet, works only slightly removed from pure thought-stuff. He builds his castles in the air, from air, creating by exertion of the imagination. Few media of creation are so flexible, so easy to polish and rework, so readily capable of realizing grand conceptual structures.",
        },
        {
            id: "5a6ce86f2af929789500e821",
            author: "Fred Brooks",
            en: 'The first false assumption that underlies the scheduling of systems programming is that all will go well, i.e., that each task will hike only as long as it "ought" to take. A large programming effort, however, consists of many tasks, some chained end-to-end. The probability that each will go well becomes vanishingly small.',
        },
        {
            id: "5a6ce86f2af929789500e81e",
            author: "Donald Knuth",
            en: "We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil. Yet we should not pass up our opportunities in that critical 3%.",
        },
        {
            id: "5a6ce86f2af929789500e824",
            author: "Ken Thompson",
            en: "One of my most productive days was throwing away 1,000 lines of code.",
        },
        {
            id: "5a6ce86f2af929789500e825",
            author: "Grace Hopper",
            en: "One accurate measurement is worth more than a thousand expert opinions.",
        },
        {
            id: "5a6ce86f2af929789500e80d",
            author: "Fred Brooks",
            en: "What one programmer can do in one month, two programmers can do in two months.",
        },
        {
            id: "5a6ce86f2af929789500e82e",
            author: "Rick Osborne",
            en: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
        },
        {
            id: "5a6ce86f2af929789500e830",
            author: "John Ousterhout",
            en: "A program that produces incorrect results twice as fast is infinitely slower.",
        },
    ];
}
