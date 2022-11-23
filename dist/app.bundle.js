(() => {
	const e = (e) => {
		const t = document.createElement("li");
		t.className = "discussion__container";
		const s = document.createElement("div");
		s.className = "discussion__avatar--wrapper";
		const n = document.createElement("img");
		(n.className = "discussion__avatar--image"), (n.src = e.avatarUrl);
		const a = document.createElement("div");
		a.className = "discussion__content";
		const c = document.createElement("h2");
		c.className = "discussion__title";
		const o = document.createElement("a");
		(o.href = e.url), (o.textContent = e.title);
		const r = document.createElement("div");
		(r.className = "discussion__information"),
			(r.textContent = `${e.author}/ ${new Date(
				e.createdAt
			).toLocaleDateString()}`);
		const i = document.createElement("div");
		i.className = "discussion__answered";
		const u = document.createElement("button");
		return (
			(u.textContent = "☑"),
			t.append(s, a, i),
			a.append(c, r),
			agoraStatesDiscussions,
			c.append(o),
			s.append(n),
			i.append(u),
			t
		);
	};
	(document.querySelector(".form").onsubmit = function (t) {
		t.preventDefault();
		const s = new Date(),
			n = document.querySelector("#name").value,
			a = document.querySelector("#title").value,
			c = {
				avatarUrl: `https://avatars.dicebear.com/api/identicon/:${n}${a}.svg`,
				author: n,
				url: "",
				title: a,
				createdAt: s,
				answer: null,
			};
		ul.prepend(e(c));
	}),
		fetch("http://localhost:4000/discussions/")
			.then((e) => e.json())
			.then((t) => {
				(agoraStatesDiscussions = t),
					console.log(agoraStatesDiscussions),
					((t) => {
						for (let s = 0; s < agoraStatesDiscussions.length; s += 1)
							t.append(e(agoraStatesDiscussions[s]));
					})(document.querySelector("ul.discussions__container"));
			});
})();
